from app import app
from flask import jsonify
import random
import serial
import json
from flask import Flask, Response
import base64,time
import cv2 
import threading
import subprocess



## PANORAMA 

# def capture_images():

#     images = []
#     capture = cv2.VideoCapture(0, cv2.CAP_DSHOW)  # 0 corresponds to the default camera

#     # Add a delay to allow the camera to stabilize
#     time.sleep(2)

#     # Capture 3 images
#     for _ in range(3):
#         ret, frame = capture.read()
#         if not ret:
#             print("Failed to capture image")
#             break
#         images.append(frame)
#         cv2.imshow("Captured Image", frame)
#         cv2.waitKey(4000)  # Wait for 2 seconds between captures

#     capture.release()
#     cv2.destroyAllWindows()

#     return images


# def stitch_images(images):
#     # Your existing stitch_images() function
#      # Create a Stitcher object
#     stitcher = cv2.Stitcher_create()

#     # Stitch the images
#     status, panorama = stitcher.stitch(images)

#     # Check if the stitching was successful
#     if status == cv2.Stitcher_OK:
#         # Resize the panorama to your desired dimensions
#         desired_height = 360
#         desired_width = 3*desired_height   # Change this to your desired width
#           # Change this to your desired height
#         panorama = cv2.resize(panorama, (desired_width, desired_height)) 

#         # Display the panorama
#         retval, buffer = cv2.imencode('.jpg', panorama)
#         panorama_base64 = base64.b64encode(buffer).decode()

#         return panorama_base64  # Return the base64 encoded image data

#     else:
#         return None  # Return None if panorama stitching failed


# @app.route('/generate-panorama', methods=['GET'])
# def generate_panorama():
#     # Capture images
#     captured_images = capture_images()

#     # Stitch images into panorama
#     if captured_images:
#         panorama_data = stitch_images(captured_images)

#         if panorama_data:
#             # Return the base64 encoded panorama to the React app
#             return jsonify({"panorama": panorama_data})

#     return "Failed to generate panorama", 500







##   SENSOR READING API   



# ser = serial.Serial(port='COM7', baudrate=9600)
# @app.route('/table-data', methods=['GET'])

# def get_table1_data():

#         if ser.is_open:
#             ser.flushInput() 
#             ser.write(b'r')
#             data = ser.readline().decode().strip().split(' ')
#             if len(data) > 0:
#                 table_data1 = {
#                     'Humidity': data[0],
#                     'Temperature': data[1],
#                     # 'Pressure': data[2]

#                 }
#                 return jsonify(table_data1)


# ## GAS SENSOR READING

# seri = serial.Serial(port='COM5', baudrate=9600)

# @app.route('/CO2-data', methods=['GET'])
# def CO2():
#     if seri.is_open:
#         seri.flushInput()
#         seri.write(b'r')

#         # Wait for a short delay to allow data to be received
#         time.sleep(0.1)

#         # Read data from serial port
#         received_data = seri.readline().decode().rstrip().split(' ')

#         # Ensure that the data array has the expected number of elements
#         if len(received_data) < 10:
#             received_data = seri.readline().decode().rstrip().split(' ')
#             time.sleep(0.1)

#         print(received_data)

#         gas_data = {
#             'pH': float(received_data[0]),
#             'CO2': int(received_data[9])
#         }

#         return jsonify(gas_data)

# seri2 = serial.Serial(port='COM5', baudrate=9600)

# @app.route('/CO2-datas2', methods=['GET'])
# def CO2s2():
#     if seri2.is_open:
#         seri2.flushInput()
#         seri2.write(b'r')

#         # Wait for a short delay to allow data to be received
#         time.sleep(0.1)

#         # Read data from serial port
#         received_data = seri2.readline().decode().rstrip().split(' ')

#         # Ensure that the data array has the expected number of elements
#         if len(received_data) < 10:
#             received_data = seri2.readline().decode().rstrip().split(' ')
#             time.sleep(0.1)

#         print(received_data)

#         gas_data = {
#             'pH': float(received_data[0]),
#             'CO2': int(received_data[1])
#         }

#         return jsonify(gas_data)
                
# @app.route('/get_data', methods=["GET"])


# def get_data():
#         if seri.is_open:
#             seri.flushInput()
#             seri.write(b'r')

#             # Wait for a short delay to allow data to be received
#             time.sleep(0.05)

#         # Read data from serial port
#             received_data = seri.readline().decode().rstrip().split(' ')

#             # Ensure that the data array has the expected number of elements
#             if len(received_data) < 10:
#                 received_data = seri.readline().decode().rstrip().split(' ')
#                 time.sleep(0.05)

#             print(received_data)
#             # if len(data1) == 10:
#             spectro_data = {
#                     "data0": received_data[1],
#                     "data1": received_data[2],
#                     "data2": received_data[3],
#                     "data3": received_data[4],
#                     "data4": received_data[5],
#                     "data5": received_data[6],
#                     "data6": received_data[7],
#                     "data7": received_data[8]
#                 }
#             print(spectro_data)
#             return json.dumps(spectro_data)
                
        
            
# ser = serial.Serial(port='COM8', baudrate=9600)

# @app.route('/soil-moisture', methods=['GET'])
# def moisture():
#         if ser.is_open:
#             ser.flushInput() 
#             ser.write(b'r')
#             data = ser.readline().decode().strip().split(' ')
#             if len(data) == 2:
#                 gas_data2={ 'Soil Moisture' :  data[1],
#                            'SOil Sample Temperature' : data[0]
#                 }
#                 return jsonify(gas_data2)

# # ser = serial.Serial(port='COM3', baudrate=9600)

# @app.route('/soil-temp', methods=['GET'])
# def temperature():
#         if ser.is_open:
#             ser.flushInput() 
#             ser.write(b'r')
#             data = ser.readline().decode().strip().split('\t')
#             if len(data) == 1:
#                 gas_data3={'Soil Sample Temperature' :data[0]}
#                 return jsonify(gas_data3)
##   COMPASS API


# ard_port = 'COM3'  # Update with your Arduino port
# comp = serial.Serial(ard_port, 9600)
# @app.route('/rover-compass-data',methods=['GET'])
# def get_rover_compass_data():

#         if comp.is_open:
#             comp.flushInput() 
#             comp.write(b'r')
#             degree = comp.readline().decode().strip()
#             return jsonify({"degree":degree})
    

# ##   ARM-COMPASS API    

# @app.route('/arm-compass-data',methods=['GET']) 
# def get_arm_compass_data():
#     degree = 90
#     return jsonify({"degree":degree})


##   WHEELS API


# arduino = serial.Serial(port='COM4', baudrate=9600)
def wheels(var):
    if (var == 'w'):  # if the value is f
        print("forward")
    if (var == 's'):  # if the value is b
        print("backward")
    if (var == 'a'):  # if the value is l
        print("left")
    if (var == 'd'):  # if the value is r
        print("right")
    if (var == ' '):  # if the value is s
        print("stop")
    if (var == 'q'):
        print("partiaLeft")
    if (var == 'e'):
        print("partialRight")
    if (var == 'g'):
        print("360-anticlock")
    if (var == 'h'):
        print("360-clock")
    if (var == 'j'):
        print("180-clock")
    if (var == 'f'):
        print("180-anticlock")
    if(var=='W'):
         print("forward_slow")
    if(var=='A'):
         print("left_slow")
    if(var=='D'):
         print("right_slow")
    if(var=='S'):
         print("backward_slow")
    # arduino.write(str.encode(var))
    
@app.route('/forward')
def forward():
        return Response(wheels('w'))


@app.route('/backward')
def backward():
        return Response(wheels('s'))


@app.route('/left')
def left():
        return Response(wheels('a'))


@app.route('/right')
def right():
        return Response(wheels('d'))

@app.route('/forward_slow')
def forward():
        return Response(wheels('W'))


@app.route('/backward_slow')
def backward():
        return Response(wheels('S'))


@app.route('/left_slow')
def left():
        return Response(wheels('A'))


@app.route('/right_slow')
def right():
        return Response(wheels('D'))

@app.route('/stop')
def stop():
        return Response(wheels(' '))


@app.route('/partialL')
def partialLeft():
        return Response(wheels('q'))


@app.route('/partialR')
def partialRight():
        return Response(wheels('e'))

# @app.route('/anticlock360L')
# def Rotate360L():
#     while(True):
#         return Response(wheels('g'))

# @app.route('/anticlock180L')
# def Rotate180R():
#     while(True):
#         return Response(wheels('f'))

# @app.route('/clock360R')
# def Rotate360R():
#     while(True):
#         return Response(wheels('h'))

# @app.route('/clock180R')
# def Rotate180R():
#     while(True):
#         return Response(wheels('j'))




def arm(var):
    if (var == 'W'):  # if the value is f
        print("la1-forward")
    if (var == 'S'):  # if the value is b
        print("la1-backward")
    if (var == 'A'):  # if the value is l
        print("la2-forward")
    if (var == 'D'):  # if the value is r
        print("la2-backward")
    if (var == 'Q'):  # if the value is s
        print("tt-right")
    if (var == 'E'):
        print("tt-left")
    if (var == 'X'):    
        print("stop-la")
    if (var == 'R'):
        print("open")
    if (var == 'F'):
        print("close")
    if (var == 'T'):
        print("wrist-up")
    if (var == 'G'):
        print("wrist-down")
    if (var == 'Z'):
        print("stop-grip")   
    if (var == 'C'):
        print("grip-rotate-right")
    if (var == 'V'):
        print("grip-rotate-left")   
    if (var == 'B'):
        print("stop-tt-rotate")
    # arduino.write(str.encode(var))
    
    
@app.route('/la1-forward')    
def la1f():

        return Response(arm('W'))


@app.route('/la1-backward')
def la1b():

        return Response(arm('S'))


@app.route('/la2-forward')
def la2f():

        return Response(arm('A'))


@app.route('/la2-backward')
def la2b():

        return Response(arm('D'))


@app.route('/tt-right')
def ttr():

        return Response(arm('Q'))


@app.route('/tt-left')
def ttl():

        return Response(arm('E'))


@app.route('/stop-la')
def stopla():

        return Response(arm('X'))


@app.route('/open')
def open():

        return Response(arm('R'))


@app.route('/close')
def close():

        return Response(arm('F'))


@app.route('/wrist-up')
def wrtup():

        return Response(arm('T'))


@app.route('/wrist-down')
def wrtdown():

        return Response(arm('G'))


@app.route('/stop-grip')
def stopg():

        return Response(arm('Z'))


@app.route('/grip-rotate-right')
def griprotr():

        return Response(arm('C'))

@app.route('/grip-rotate-left')
def griprotl():

        return Response(arm('V'))
    
@app.route('/stop-tt-rotate')
def stopttrot():

        return Response(arm('B'))
    

ard = serial.Serial(port='COM10', baudrate=9600)
@app.route('/gps_data', methods=["GET"])


def gps_data():
        if ard.is_open:
            ard.flushInput() 
            ard.write(b'r')
            data = ard.readline().decode().strip().split(' ')  # Read the data from the Arduino
            gps = {data[0], data[1]}
            return jsonify(data)
def ph(var):
    if (var == 'U'):  
        print("ph1-a++")
    if (var == 'I'):  
        print("ph1-a--")
    if (var == 'O'):  
        print("ph2-a++")
    if (var == 'P'):  
        print("ph2-a--")
    # arduino.write(str.encode(var))
        
# @app.route('/ph-u')    
# def phu():
#     while (True):
#         return Response(ph('U'))
    
# @app.route('/ph-i')    
# def phi():
#     while (True):
#         return Response(ph('I'))

# @app.route('/ph-o')    
# def pho():
#     while (True):
#         return Response(ph('O'))

# @app.route('/ph-p')    
# def php():
#     while (True):
#         return Response(ph('P'))
# def probe(var):
#     if (var == 'K'):  
#         print("probe-up")
#     if (var == 'Y'):  
#         print("probe-down")
    
#     # arduino.write(str.encode(var))

# @app.route('/probe-up')    
# def probeup():
#     while (True):
#         return Response(probe('K'))

# @app.route('/probe-down')    
# def probedown():
#     while (True):
#         return Response(probe('Y'))
    

# @app.route('/run_script', methods=['POST'])
# def run_script():
#     bash_script_path = "/home/ubnt/Documents/GitHub/Vyadh_IRC24/vyadh-gcs/run.sh"
#     command = f"/bin/bash {bash_script_path}"

#     try:
#         result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         output = result.stdout.decode()
#         if result.stderr:
#             error = result.stderr.decode()
#             return {'output': output, 'error': error}, 500
#         else:
#             return {'output': output}
#     except subprocess.CalledProcessError as e:
#         return {'error': str(e)}, 500
    

# @app.route('/end_script', methods=['POST'])
# def end_script():
#     bash_script_path = "/home/ubnt/Documents/GitHub/Vyadh_IRC24/vyadh-gcs/kill.sh"
#     command = f"/bin/bash {bash_script_path}"

#     try:
#         result = subprocess.run(command, shell=True, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#         output = result.stdout.decode()
#         if result.stderr:
#             error = result.stderr.decode()
#             return {'output': output, 'error': error}, 500
#         else:
#             return {'output': output}
#     except subprocess.CalledProcessError as e:
#         return {'error': str(e)}, 500
    
# sci=serial.Serial(port='COM9', baudrate=9600)
    
# def scikit(kit):
#     if (kit== 'Q'):  # if the value is f
#         print("+60")
#     if (kit== 'A'):  # if the value is b
#         print("-60")
#     if (kit== 'E'):  # if the value is l
#         print("+90")
#     if (kit== 'D'):  # if the value is r
#         print("-90")
#     if (kit== 'S'):  # if the value is s
#         print("shake")
#     if (kit== 'E'):
#         print("tt-left")
#     if (kit== '1'):
#         print("pump1")
#     if (kit== '2'):
#         print("pump2")
#     if (kit== '3'):
#         print("pump3")
#     sci.write(str.encode(kit))

# @app.route('/60+')
# def up60():
#     return Response(scikit('Q'))
# @app.route('/60-')
# def up60():
#     return Response(scikit('A'))
# @app.route('/90+')
# def up60():
#     return Response(scikit('E'))
# @app.route('/90-')
# def up60():
#     return Response(scikit('D'))
# @app.route('/shake')
# def up60():
#     return Response(scikit('S'))
# @app.route('/pump1')
# def up60():
#     return Response(scikit('1'))
# @app.route('/pump2')
# def up60():
#     return Response(scikit('2'))
# @app.route('/pump3')
# def up60():
#     return Response(scikit('3'))


