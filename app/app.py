from flask import Flask, render_template
import os

template_dir = os.path.abspath('C:/Users/xpyth/WebstormProjects/untitled3/html')
static_dir = os.path.abspath('C:/Users/xpyth/WebstormProjects/untitled3/static')
app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

@app.route('/')
def index():
    return render_template('index.html')

app.run()
