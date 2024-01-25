#!/usr/bin/env python

import subprocess

# Provide the path to the Bash script
bash_script_path = "run.sh"  # Replace with the actual path to your Bash script

# Build the command to execute the Bash script
command = f"/bin/bash {bash_script_path}"

# Execute the command using subprocess.run
try:
    result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    print("Output:", result.stdout.decode())
    if result.stderr:
        print("Errors:", result.stderr.decode())
except subprocess.CalledProcessError as e:
    print(f"Error executing command: {e}")