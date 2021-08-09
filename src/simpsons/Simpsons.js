export default function Simpson({name, surname, info, age, photo}) {
    return (
        <div className={'simpson'}>
            <h2>{name} {surname}, age: {age}</h2>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    )}