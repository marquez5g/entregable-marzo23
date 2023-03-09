
function Card({myName, aboutMe}) {
  return (
    <div className="card">
      <p>Tu nombre es {myName}. Un poco sobre ti: {aboutMe}</p>
    </div>
  );
}

export default Card;
