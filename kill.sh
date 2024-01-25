#!/bin/bash


gnome-terminal --tab --title="My Terminal" -- bash -c "echo 'Command 1'; sleep 5; pkill -9 gnome-terminal; exec bash"

