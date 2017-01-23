# Watson IoT Standalone Dashboard Monitor on Raspberry Pi
This repository contains all code and a step by step instruction to set up a Raspberry 3 with touchscreen to serve as a fully functional no-maintenance SmartHome monitor.

## Prerequisites
#### Raspberry Pi 3 Model B
The Dashboard Monitor would run on other Pi models as well, but the app needs some resources, especially when you show many line graphs. The Pi 3 has enough performance to handle the load.
#### Raspberry Pi 7" touch display
The official 7" touch display is not great but it works pretty much out of the box and it offers a resolution of 800x480 pixel. 
#### Raspberry Pi 7" display case
The case for Pi and display is of course not mandatory but it looks pretty professional on your desktop.
#### 5.1V/2.5A power supply
The Pi 3 and the display are very hungry. You will notice a yellow flash symbol in the top right corner every time the voltage drops under a certain level which seems to be most of the time with a normal power supply. Use a powerful 5.1V power supply with at least 2.5 A. 

## Install Raspberry Pi
Setup your Pi with the latest Raspbian Jessie using Noobs. There are many instructions, e.g. this one
https://www.raspberrypi.org/learning/noobs-install/worksheet/

## Install Dashboard Monitor
Installing and running the dashboard is easy. Just pull this repository into a folder in your home directory, install the dependcies and run it. You will have to set up your IoT credentials as well, but we do this later.

Update to the latest NodeJS version including npm. The current node and npm version have to be removed first.
```console
mkdir /home/pi/Projects/node
cd /home/pi/Projects/node
sudo apt-get remove nodered -y
sudo apt-get remove nodejs nodejs-legacy -y
sudo apt-get remove npm  -y
wget https://nodejs.org/dist/v4.3.2/node-v4.3.2-linux-armv6l.tar.gz 
tar -xvf node-v4.3.2-linux-armv6l.tar.gz 
cd node-v4.3.2-linux-armv6l
sudo cp -R * /usr/local/
sudo reboot
``` 

We assume that you are using the default user pi. We are installing the code into the Projects folder. If you choose another location, you will have to adapt the path in the startup script.

```console
cd /home/pi/Projects
git clone https://github.com/FrankMielke/iot-pi-dashboard.git
``` 

Now that the code is in the folder, use npm to resolve the needed modules and start the server. We use a Node based Webpack server to build the code on the fly and serve it to the Browser. This approach is normally intended for development purposes, but it proved to be very practical for this project since you just have to pull the latest code and the Webpack server automatically builds the changes and refreshes the Browser. Of course, you could also build the repository for production and serve only the optimized modules. A description for production use will follow.

```console
npm install
``` 

The installation of the dependencies can take quite a while.
If this is done, we can finally start the server. Remember: We will have to set the credentials before we can really use it. We just try if the server starts without errors, since it will be automatically started later on and it will be difficult to see the problems.

```console
npm start
``` 

## Configure 
The Dashboard Monitor should automatically start in kiosk mode and run 24/7. This requires some configuration to prepare the Pi for this job.

#### Autostart
The server must start automatically when the Pi boots. There are different ways to accomplish this. We modify /etc/rc.local and add two lines at the end of the file to start the server

```console
sudo nano /etc/rc.local
``` 

Add following lines to the file, just before the existing exit(0) line.

```console
cd /home/pi/Documents/iot-pi-dashboard
npm start &
``` 

#### Disable screen saver and start chromium in kiosk mode
The Pi has a default screen saver which causes problems with the display. In addition, the monitor should be running all the time without user interaction. We will disable the screen saver. We also want the chromium browser to start automatically in kiosk mode showing the dashboard page.

```console
nano /home/pi/.config/lxsession/LXDE-pi/autostart
``` 

Add following lines to the file

```console
@xscreensaver -no-splash@
@chromium-browser --kiosk --disable-overlay-srollbar --noerrdialogs --incognito http://localhost:3000
``` 

#### Change the brightness of the screen
Since the monitor runs all the time, we will dim the brightness. Otherwise it would be too bright in a dark room.

```console
sudo chmod 777 /sys/class/backlight/rpi_backlight/brightness
echo 128 > /sys/class/backlight/rpi_backlight/brightness
``` 

#### Change the screen orientation
The orientation of the display has been changed in the latest revision of the touch screen. If you have an older case and a new display, you might already have noticed that the screen is upside down. We will change the orientation. 

```console
sudo nano /boot/config.txt
``` 

Add following line to the end of the file

```console
lcd_rotate=2
``` 

#### Remove mouse pointer
The mouse pointer does not make too much sense on a touch device. We remove it.

```console
sudo apt-get install unclutter
``` 

## Setup the Dashboard
Everything should be installed now. In this step, we will connect to a set of existing IoT Dashboards. The idea is, to create and modify the dashboards on a large screen and synchronize the configuration with the Pi. The Dashboard Monitor refreshes the page every 10 minutes to avoid hang situations or other problems. After a refresh, the new synchronized dashboard will be available.

##### Create menu
There is no menu concept for dashboards in the IoT Platform. The Pi version of the dashboard uses a hard coded menu as part of the wrapper application. You can configure it by modifying the PiDashboardConfig.json configuration file

```console
cd /home/pi/Projects/iot-pi-dashboard/app
nano PiDashboardConfig.json
``` 

Search for the menu configuration and modify it. The menu is basically a list of menu entries with an icon, a label and the id of a dashboard. You can find the icon files in /app/resources.

```console
{
...
  "settings": {
  ...
    "menu": {
      "items": [
        {
          "label": "Power",
          "id": "0d3d5338-8a6c-43b6-9699-39b42bba216a",
          "icon": "gs45.png"
        },
        {
          "label": "Water",
          "id": "d45ca378-e683-4c36-b643-00c3d530d749",
          "icon": "gs39.png"
        },
        ...
      ],
      "selectedItem": "0d3d5338-8a6c-43b6-9699-39b42bba216a"
    }
  }
}
``` 

##### Set credentials
You can set your credentials in the same configuration file. You can also set the credentials using the settings dialog in the Dashboard Monitor, but if you do not have a mouse and keyboard attached to your Pi, it might be easier to do it here. The dialog would modify the same file.

```console
{
...
  "settings": {
  ...
    "auth": {
      "ltpa": "",
      "id": "a-6qkzjf-hgyddqkvqc",
      "org": "6qkzjf",
      "domain": "internetofthings.ibmcloud.com",
      "apiKey": "a-6qkzjf-hgyddqkvqc",
      "apiToken": "PUT_TOKEN_HERE"
    }
  }
}
``` 

Create an apiKey and apiToken in the IoT Platform and specify it here together with user id and org. Domain does not have to be changed for the Watson IoT production system. You could also use an LTPA Token for authentication but since the token is invalidated from time to time, it does not make too much sense for a 24/7 monitor.









