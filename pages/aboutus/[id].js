// pages/aboutus/[id].js

import { useRouter } from 'next/router';

const details = [
    { id: '1', name: 'Yash', role: 'Senior Developer' },
    { id: '2', name: 'Vaibhav', role: 'Backend Developer' },
    { id: '3', name: 'Suresh', role: 'Frontend Developer' }
];

function AboutUs() {
    const router = useRouter();
    const developers = router.query.id;
    

    // Find the developer details based on the id
    const developer = details.find(item => item.id === developers);

    return (
        <div>
            {developer ? (
                <div>
                    <h1>Name: {developer.name}</h1>
                    <p>Role: {developer.role}</p>
                </div>
            ) : (
                <p>Developer doesn't exist</p>
            )}
        </div>
    );
}

export default AboutUs;
