import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1.5}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="card"
    {...props}
  >
    <rect x="567" y="233" rx="3" ry="3" width="52" height="6" /> 
    <rect x="485" y="229" rx="3" ry="3" width="410" height="6" /> 
    <circle cx="628" cy="220" r="14" /> 
    <circle cx="139" cy="119" r="115" /> 
    <rect x="6" y="262" rx="10" ry="10" width="267" height="22" /> 
    <rect x="6" y="295" rx="14" ry="14" width="267" height="84" /> 
    <rect x="203" y="407" rx="0" ry="0" width="6" height="0" /> 
    <rect x="55" y="394" rx="0" ry="0" width="2" height="0" /> 
    <rect x="9" y="422" rx="10" ry="10" width="86" height="24" /> 
    <rect x="148" y="402" rx="24" ry="24" width="123" height="52" />
  </ContentLoader>
)

export default Skeleton

