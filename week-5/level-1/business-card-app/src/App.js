import Card from "./Card";


function App() {

  const CardProps = {
    name: 'John Doe',
    description: 'Web Developer',
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      // Add other social media links as needed
    },
    interests: ['React', 'JavaScript', 'CSS', 'Traveling'],
  }
  return (
    <div className="App">
      <Card {...CardProps} />
    </div>
  );
}

export default App;
