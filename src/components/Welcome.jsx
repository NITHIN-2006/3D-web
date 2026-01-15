import Typewriter from "typewriter-effect"

export default function Welcome() {
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        width: "100%",
        textAlign: "center",
        color: "white",
        fontSize: "64px",
        fontWeight: "700",
        letterSpacing: "8px",
        fontFamily: "Quicksand, sans-serif",
        textShadow: "0 0 20px rgba(255,255,255,0.8)",
        paddingTop:"100px"
      }}
    >
      <Typewriter
        options={{
          strings: ["WELCOME TO MY WEBSITE"],
          autoStart: true,
          loop: true,
          delay: 120
        }}
      />
    </div>
  )
}
