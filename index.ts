import { AminoDorks } from 'amino.dorks';

const main = async () => {
    const aminoDorks = new AminoDorks({
        apiKey: 'dfe5dfbea732bb53ccee16f1e6c02bbc',
        context: {
            enviroment: 'global'
        }
    });
    const response = await aminoDorks.security.login('zxv', 'MRMR12');
    console.log(`Logged in ${response.userProfile.nickname}`);
};

main();
