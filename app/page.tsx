"use client";
import { JaaSMeeting } from "@jitsi/react-sdk";
import Head from 'next/head'

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <Head>
      <title>TeleConsultation Platform</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/* Video Call Section */}
    <div className="bg-blue-600 w-70% h-full flex items-center justify-left">
    <JaaSMeeting
     appId ="vpaas-magic-cookie-cd58d83d6bb247d893d484da00e00493"
     roomName = "Ausa Clinic"
     jwt = "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtY2Q1OGQ4M2Q2YmIyNDdkODkzZDQ4NGRhMDBlMDA0OTMvOWE3ZTViLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2OTg2NDMyMTYsImV4cCI6MTY5ODY1MDQxNiwibmJmIjoxNjk4NjQzMjExLCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtY2Q1OGQ4M2Q2YmIyNDdkODkzZDQ4NGRhMDBlMDA0OTMiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6InBhcmlzaHJhZ3JvdXAiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAxNDE1MTYwMjg0ODMyODE0MTgyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJwYXJpc2hyYWdyb3VwQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.HBHHcAYkTu0nwcpuZOEyA18J66zmltHZxe-HuiodFs02VJcCEHztRij7iuagT97DGscn2yBwJJXDj0MQc4atMJarxIUIT3xpIZbHKR_zrpA5rs-tvaw7TgBUcS6IhhBWZwbSiu5WFXECe6JLymZiduK0RNwewsFiHPOhY3I7Xg7KTFvVD6ffvCODaMB-ncoricGjo11pFnE4_1z-EvmH_cTx9ydVyp44chEIr_UK66_zb6lUJDqnE70FrOuOOSu-BOR7e7mUzSR_viUJdEXjI8140zZ7nZ00Qhj9fdLWomR5T2HgafvFJEHewMcv_mzeOv-ahoxEyjtZeSxEBKfIZA"
      configOverwrite = {{
      disableThirdPartyRequests: true,
      disableLocalVideoFlip: true,
      backgroundAlpha: 0.5
      }}
      interfaceConfigOverwrite = {{
      VIDEO_LAYOUT_FIT: 'nocrop',
      MOBILE_APP_PROMO: false,
      TILE_VIEW_MAX_COLUMNS: 4
      }}
      getIFrameRef={(iframeRef) => {
        iframeRef.style.height = "600px";
        iframeRef.style.width = "100%";
      }}
      //  spinner = { SpinnerView }
      // onApiReady = { (externalApi) => { ... } }
    />      </div>

    {/* Profile Section */}
    <div className="bg-white w-3/4 p-4 shadow-md mt-4 flex flex-col">
      <div className="font-bold text-2xl mb-4">Aleena Sony</div>
      <div className="grid grid-cols-2 gap-4">
        <div>Gender: Female</div>
        <div>Age: 24yrs</div>
        <div>Height: 178 cm</div>
        <div>Weight: 82kg</div>
      </div>
      <div className="mt-4">Symptoms: headache, nausea, throat pain</div>
    </div>

    {/* Test Selection Section */}
    <div className="bg-white w-3/4 p-4 shadow-md mt-4">
      <div className="font-bold text-xl mb-4">What tests do you want your patient to take?</div>
      <div className="flex space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded">ECG</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Body temperature</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">ENT</button>
      </div>
    </div>

    {/* Test Results Section */}
    <div className="bg-white w-3/4 p-4 shadow-md mt-4">
      <div className="font-bold text-xl mb-4">Test Results</div>
      {/* Display test results here */}
    </div>

    {/* Diagnosis Section */}
    <div className="bg-white w-3/4 p-4 shadow-md mt-4">
      <div className="font-bold text-xl mb-4">Diagnosis</div>
      <textarea className="w-full p-2 border rounded" placeholder="Add a small note (optional)"></textarea>
    </div>
  </div>
  );
}
 

