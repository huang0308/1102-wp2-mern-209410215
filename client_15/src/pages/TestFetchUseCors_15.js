import axios from 'axios';

const TestFetchUseCors_15 = async () => {
    const response = await fetch('http://localhost:5000');
    const data1 = await response.json();
    console.log('fetch data1',data1);

    const data2 = await axios.get('http://localhost:5000');
    console.log('axios data2', data2.data);

    const currentUser = {
        "name":"huang03083",
        "email":"2094102153@gms.tku.edu.tw",
        "password":"secret3",
    };

    try {
        const { data } = await axios.post(
            'http://localhost:5000/api/v1/auth_15/register_15',
            currentUser
        );
        console.log('register data',data);
    } catch (err) {
        console.log(err);
    }
};

export default TestFetchUseCors_15;