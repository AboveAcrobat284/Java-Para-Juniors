import { Link } from "react-router-dom";
import '../assets/styles/LandingPage.css'
import TabHead from "../components/organism/TabHead";
import Tabs from "../components/organism/Tabs";
import ShowCase from "../components/organism/ShowCase";
import ShowCaseDown from "../components/organism/ShowCaseDown";
import Spacecomponent from "../components/atoms/Spacecomponent";

function Landing() {
  return (
    <>
    <TabHead></TabHead>
    <ShowCase></ShowCase>
    <Tabs></Tabs>
    <Spacecomponent></Spacecomponent>
    <ShowCaseDown></ShowCaseDown>
    <Spacecomponent></Spacecomponent>
    </>
  );
}
export default Landing;