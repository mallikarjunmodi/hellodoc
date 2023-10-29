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
    <div className="bg-blue-600 w-100 h-full flex items-center justify-center">
    <JaaSMeeting
     appId ="vpaas-magic-cookie-cd58d83d6bb247d893d484da00e00493"
     roomName = "PleaseUseAGoodRoomName"
     jwt = "eyJraWQiOiJ2cGFhcy1tYWdpYy1jb29raWUtY2Q1OGQ4M2Q2YmIyNDdkODkzZDQ4NGRhMDBlMDA0OTMvOWE3ZTViLVNBTVBMRV9BUFAiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJqaXRzaSIsImlzcyI6ImNoYXQiLCJpYXQiOjE2OTg1OTQxMTQsImV4cCI6MTY5ODYwMTMxNCwibmJmIjoxNjk4NTk0MTA5LCJzdWIiOiJ2cGFhcy1tYWdpYy1jb29raWUtY2Q1OGQ4M2Q2YmIyNDdkODkzZDQ4NGRhMDBlMDA0OTMiLCJjb250ZXh0Ijp7ImZlYXR1cmVzIjp7ImxpdmVzdHJlYW1pbmciOnRydWUsIm91dGJvdW5kLWNhbGwiOnRydWUsInNpcC1vdXRib3VuZC1jYWxsIjpmYWxzZSwidHJhbnNjcmlwdGlvbiI6dHJ1ZSwicmVjb3JkaW5nIjp0cnVlfSwidXNlciI6eyJoaWRkZW4tZnJvbS1yZWNvcmRlciI6ZmFsc2UsIm1vZGVyYXRvciI6dHJ1ZSwibmFtZSI6InBhcmlzaHJhZ3JvdXAiLCJpZCI6Imdvb2dsZS1vYXV0aDJ8MTAxNDE1MTYwMjg0ODMyODE0MTgyIiwiYXZhdGFyIjoiIiwiZW1haWwiOiJwYXJpc2hyYWdyb3VwQGdtYWlsLmNvbSJ9fSwicm9vbSI6IioifQ.EEfooV7A57BS_js2XEDjyi9MQwVvJvgDL4oQvDya24oFl-jg5b2y9u2FXM0Ngz1STRZKFc12NFxkJcgy0b9TTL1e29XlsIObIPFxrE4TdEw3LfLxGrhTqGgYQNvm2qeZyIlpSZcV-_Uz7WaUdV5r9sNfnxJIY8aiogC9JiHKpQbflBA9yahjXrwZX5jmAPps2ImOnD6JtNpWYB89JSzfCU8SgOuXg06oClMsIdH1zjeUsfHI0dyyP2F7KPK5GhGUwy8BsZqlLIpNy3dbbMvtY7Qt60idbVBzAs_PbtKw362rkDIjLphnWiGWDRd-LmQ9zDu8LvwHdIBzwh47ZmMgdg"
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
        iframeRef.style.height = "400px";
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
 

