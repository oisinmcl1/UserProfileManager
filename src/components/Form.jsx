import {useState, useContext} from 'react';
// Import shared profile context
import {ProfileContext} from '../App';

function Form() {
    // Access setProfile func from context to update profile
    const {setProfile} = useContext(ProfileContext);

    // Store users input before saving it to profile
    const [input, setInput] = useState({name: "", email: "", bio: ""});

    // Func called when user submits form
    const handleSubmit = () => {
        // Save user's input to profile
        setProfile(input);
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Name: </label>
            <input
                type="text"
                value={input.name}
                // Update name in input state
                onChange={(e) => setInput({...input, name: e.target.value})}
            />
            <br></br>
            <br></br>

            <label>Email: </label>
            <input
                type="email"
                value={input.email}
                // Update email in input state
                onChange={(e) => setInput({...input, email: e.target.value})}
            />
            <br></br>
            <br></br>

            <label>Bio: </label>
            <textarea
                value={input.bio}
                // Update bio in input state
                onChange={(e) => setInput({...input, bio: e.target.value})}
            />
            <br></br>
            <br></br>

            <button type="submit">Save Profile</button>
        </form>
    );
}

export default Form;