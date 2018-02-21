# ccs-builder README

(c) DKSS 2018

This provides a way of running the DKSS CCS builder application, so that it can initiate a compile of CCS source.

## Features

DKSS CCS Builder will build any specific CCS project. Use of this extension causes the build to take place, irrespective of open files.

The external compiler tool can be run by either pressing Ctrl-Shift-b, or pressing F1 and search for CCS Build

The build tool performs the actual compilation, so set this up first for the main file or project to be compiled.

If there are build errors, double clicking on the error in the build tool messages will select the line in VS Code (provided VS Code has been set as the editor).

![Screenshot](screenshots/Screenshot.png)

## Requirements

If DKSS CCS Builder is not installed, it will install first time running.

## Extension Settings

* `CCS.showBuildMessage`: enable/disable showing message that signal was created
* `CCS.exePath`: location of the executable to the CCS Buildtool. Normally it will point to the installer, so that updates will be automatic.

## Release Notes

Initial version

### 0.0.1

Initial release of CCS Builder

### 0.0.2

Added config setting
Added key binding

### 0.0.3

Can run the installer, and external tool so it does not need to be running previously

### 0.0.4

Added buuild tool path setting

### 1.0.0

First release

# Future Plans

Capture compiler output and send back to VS Code

# Contact

If you run into any issues or have suggestions, please raise issues on the [Github page](https://github.com/davekelly63/CCS_CodeBuilder/Issues)
