# Wavee Frontend
This is a demo frontend implementation for Music Identification.
- [Main notebook]( https://colab.research.google.com/drive/1w5HK-IM3Xicz4tUH1ZckwTCUDeDXX-Ln)
- [Wavee Backend](https://github.com/daniel-lujan/Wavee-Backend)

## Quick Start with NodeJS
```console
root@user:~$ git clone https://github.com/daniel-lujan/Wavee-Frontend.git
root@user:~$ cd Wavee-Frontend
root@user:~$ npm install
root@user:~$ npm start
```
Go to `https://localhost:3000` to see de application.
> <font color="#ff2a00">**Note**: </font> The app will be served through HTTPS with a self-signed certificate, so you will likely see a security warning. This is because the app makes use of microphone which is only allowed in Secure Contexts (see [here](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)).
