export default function HobbyLinks(){
    let pageTitle = "Hobbies";
    HobbyLinks = ["https://www.nintendo.com/us/","https://pokemongolive.com/?hl=en"];
    return(
        <div>
            <h3>{pageTitle}</h3>
            <a href={HobbyLinks[0]}>Nintendo!</a>
            <a href={HobbyLinks[1]}>Pokemon Go!</a>
        </div>
    );
}