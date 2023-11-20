import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text";

function App() {
  return (
    <div>
      <Emoji>
        {
          ({addEmoji}) => <Text addEmoji={addEmoji}/>
        }
      </Emoji>
    </div>
  );
}

export default App
