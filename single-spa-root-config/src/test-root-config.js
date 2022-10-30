import { registerApplication, start } from "single-spa";

registerApplication(
  "@react-app/search",
  () => System.import("@react-app/search"),
  () => true,
  { domElement: document.getElementById('search') }
);

registerApplication(
  "@react-app/react-app",
  () => System.import("@react-app/react-app"),
  () => true,
  { domElement: document.getElementById('tracks') }
);

registerApplication(
  "@react-app/artists-app",
  () => System.import("@react-app/artists-app"),
  () => true,
  { domElement: document.getElementById('artists') }
);


start({
  urlRerouteOnly: true,
});
