# Amaplom

[Amaplom Website here!](https://amaplom-1.onrender.com/)

## Overview
Amaplom is an Amazon clone that offers guests an e-commerce experience. Allowing user-authentication (sign in/up), being able to browse through the website and look at different products based on their category. Being able to access a show page that provides detailed information about a specific product, as well as doing some online shopping (ability to add products to your cart).

## Homepage
![image](https://github.com/JhonJSC182/Amaplom/assets/112995904/b0ebf6d8-0c16-4b17-9136-8652e067eed2)

<br>

## Signup Form

![image](https://github.com/JhonJSC182/Amaplom/assets/112995904/ef5f066b-7bea-4bcc-a073-3a73e9339998)

<br>

## Products Index
![image](https://github.com/JhonJSC182/Amaplom/assets/112995904/98ee5d61-6027-4450-90ec-5f60abb5b64a)

<br>

## Product Show
![image](https://github.com/JhonJSC182/Amaplom/assets/112995904/3fc95822-60ac-4bb5-9ed6-d30e5f9fe16c)


## Technologies used
* Languages: JavaScript, Ruby, HTML, CSS
* Frontend: React-Redux
* Hosting: Render
* Database: PostgreSQL



## Features
User authentication: Users will be able to create an account or log in to an already existing account.

```
export const CREATE_SESSION = 'session/CREATE_SESSION';
export const DESTROY_SESSION = 'session/DESTROY_SESSION';

export const createSession = sessionInfo => ({
    type: CREATE_SESSION,
    sessionInfo
});

export const destroySession = () => ({
    type: DESTROY_SESSION
})

export const createUser = userInfo => (dispatch, getState) => (
    postUser(userInfo)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(data => {
            sessionStorage.setItem('currentUser', JSON.stringify(data.user))
            dispatch(createSession(data.user));
        })
);

export const loginUser = sessionInfo => (dispatch, getState) => (
    postSession(sessionInfo)
    .then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw res;
        }
    })
    .then(data => {
        sessionStorage.setItem('currentUser', JSON.stringify(data.user))
        dispatch(createSession(data.user));
    })
);

export const logoutUser = () => (dispatch, getState) => (
    deleteSession()
    .then(res => {
        if (res.ok) {
            sessionStorage.removeItem('currentUser');
            dispatch(destroySession())
        } else {
            throw res;
        }
    })
);
export const selectCurrentUser = state => state.session;

const initialState = JSON.parse(sessionStorage.getItem('currentUser'));

const sessionReducer = (state = initialState, action) => {
    const nextState = { ...state }

    switch(action.type){
        case CREATE_SESSION:
            return action.sessionInfo;
        case DESTROY_SESSION:
            return null;
        default:
            return state;
    }
}

export default sessionReducer;
```

<br>

Products: Users can browse through all the different products available within each category.
```
const ProductIndex = props => {
    const dispatch = useDispatch();
    const products = useSelector(selectProductsArray);
    const { category } = useParams();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch]);

    return (

        <div>
            <NavBar/>
            <ul className='productsIndexPage'>
                <div className="productsIndexDivider"></div>
                    <div className="productsContainer">
                        {products.map((product, index) => (
                        <div key={`${product.id}_${index}`}>
                            <ProductItem product={product}/>
                        </div>
                        ))}
                </div>
            </ul>
        </div>
    )
}
```

## Future Implementation
* Search bar
* Reviews
* User profile

