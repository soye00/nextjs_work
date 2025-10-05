type GreetingProps = {
    name: string;
};

export default function Greeting({ name }: GreetingProps) {
    return <h2>안녕하세요, {name}!</h2>;
}