import { PiniaPluginContext } from "pinia";

function MyPiniaPlugin({ store }: PiniaPluginContext) {
  // store.$subscribe((mutation) => {
  //   localStorage.setItem("globalStore", JSON.stringify(store.$state));
  // });
  // return { creationTime: new Date() };
}

const myPlugin = ({ pinia }) => {
  pinia.use(MyPiniaPlugin);
};
export default myPlugin;
