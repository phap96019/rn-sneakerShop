import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import { Context as UserContext } from '../context/UserContext';
import sourceAnimation from '../assets/emptybox.json';
import AnimationViewComponent from '../components/AnimationViewComponent';
import ButtonComponent from '../components/ButtonComponent';
import WishListItemComponent from '../components/WishListItemComponent';

const data = [
  {
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 3,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 4,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 5,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
  {
    id: 6,
    name: 'Giày loại b',
    size: 'Size: 40',
    cost: 200,
    pic:
      'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmq6yswyxlxycdzquoi/epic-react-flyknit-2-running-shoe-B01C0P.jpg',
  },
];
const total = 400;
const CartScreen = props => {
  const [cartItems, setCartItems] = useState([]);
  const { cart, getCart } = useContext(UserContext);
  useEffect(() => {
    getCart();
    setCartItems(cart);
  }, []);

  console.log(cartItems);

  if (!cartItems.length) {
    return (
      <View style={styles.container}>
        <AnimationViewComponent
          animationStyle={{ width: 200, height: 200 }}
          autoPlay
          source={sourceAnimation}
        />
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}
          >
            Opps! Your cart is empty
          </Text>
          <Text style={{ textAlign: 'center' }}>Add somthing to make me happy:)</Text>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 15 }}>
          <ButtonComponent
            activeOpacity={0.8}
            title="Shopping now"
            handleOnPress={() => {
              props.navigation.pop();
            }}
            containerStyle={{ flex: 1 }}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        // alignItems: "center",
        margin: 10,
      }}
    >
      <ScrollView>
        <View>
          <FlatList
            data={state.cart}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <WishListItemComponent item={item} activeOpacity={0.8} handleOnPress={() => {}} />
            )}
          />
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.total}>{`Total: $ ${total}`}</Text>
        </View>
        <View>
          <ButtonComponent
            activeOpacity={0.8}
            containerStyle={{ flex: 1, marginTop: 30, marginBottom: 20 }}
            title="Proceed to ordering"
            handleOnPress={() => {}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 80,
  },
  totalContainer: {
    margin: 10,
  },
  total: {
    fontSize: 20,
    textAlign: 'right',
  },
});
export default CartScreen;
