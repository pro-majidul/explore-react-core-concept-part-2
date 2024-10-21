
export default function Friend({item}){
    const {name , email}= item
    return(
        <div className="box">
            <h3>Name {name}</h3>
            <p>Email {email} </p>
        </div>
    )
}