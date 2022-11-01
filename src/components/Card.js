import "../index.css";

export default function Card() {
  return (
    <div className="card">
      <img className="card-img" src="./card1.png"></img>
      <div className="card--stats">
        <img className="card--star" src="./Star.png"></img>
        <span>5.0</span>
        <span className="gray">(6)*</span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Kafrey</p>
      <p>
        <span className="bold">$136</span>/ person
      </p>
    </div>
  );
}
