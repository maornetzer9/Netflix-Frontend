class LoginService 
{
    baseUrl : string
    
    constructor(baseUrl: string) 
    {
        this.baseUrl = baseUrl;
    }

    async login(email: string, password: string): Promise<object>
    {
        try
        {
            const method = 'POST';
            const headers: Record<string, string> = { 'Accept':'Application/json', 'Content-Type':'Application/json'};
            const body = JSON.stringify({email, password});

            const response: Response = await fetch(this.baseUrl, {method, headers, body});
            const response_json: object = await response.json();

            return response_json
        }
        catch(err)
        {
            console.log(err);
            throw err
        }

    }
}

export default LoginService