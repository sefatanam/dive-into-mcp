
export interface GreetingType {
    uri: URL;
    name: string | string[];
}

export function Greeting<T extends GreetingType>(greet : T){
    return {
        uri: greet.uri.href,
        text: `Why are you so late? Hello, ${greet.name}!`,
    }
}