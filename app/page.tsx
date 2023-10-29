"use client";
import { JaaSMeeting } from "@jitsi/react-sdk";

export default function Home() {
  const date = new Date();
  const day = date.getDay().toLocaleString();
  const month = date.getMonth().toLocaleString();
  const year = date.getFullYear().toLocaleString();

  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1>Conectando con Servando Negrete.</h1>
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
      />
    </main>
  );
}
 