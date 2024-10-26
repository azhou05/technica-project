from imutils.perspective import four_point_transform
import pytesseract
import argparse
import imutils
import cv2
import re

ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True,
	help="path to input receipt image")
ap.add_argument("-d", "--debug", type=int, default=-1,
	help="whether or not we are visualizing each step of the pipeline")
args = vars(ap.parse_args())

## RUNNING RECEIPT DETECTION + CROPPING SCRIPT
orig = cv2.imread(args["image"])
image = orig.copy()
image = imutils.resize(image, width=500)
ratio = orig.shape[1] / float(image.shape[1])
exec(open("receipt_img_seg.py").read(), {'arg1': "-i image"})

receipt_scan = cv2.imread("result.png")
receipt = four_point_transform(orig, receipt_scan.reshape(4, 2) * ratio)

options = "--psm 4"
text = pytesseract.image_to_string(cv2.cvtColor(receipt, cv2.COLOR_BGR2RGB), config=options)

print("[INFO] raw output:")
print("==================")
print(text)
print("\n")