import './Header.css';

export function Header(){
    return(
     <div className='Header'>
        <div className='container'>
        <div>
        <a href={"/"}>BrainWave Cards</a>
        </div>

        <div>
            <a href="/">Decks</a>
        </div>

        {/* <div>
            <a href="/login">login</a>
        </div> */}
      </div>
    </div>
    );
}