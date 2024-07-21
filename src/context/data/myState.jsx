import PropTypes from 'prop-types';
import MyContext from './myContext';
import { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/Firebaseconfig';

function MyState(props) {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else if (mode === 'dark'){
            setMode('light');
            document.body.style.backgroundColor = 'white';
            
        }
    }
    const [loading,setloading]=useState(false)

    const [products,setproducts]=useState({
        title:null,
        price:null,
        imageURL:null,
        category:null,
        description:null,
        time:Timestamp.now(),
        date:new Date().toLocaleString(
            "en-US",
            {
                month:"short",
                day:"2-digit",
                year:"numeric",
            }
        )
    })

    
    const addproduct=async()=>{
        if(products.title==null || products.category==null || products.description==null || products.imageURL==null || products.price==null) return toast.error("all feilds are requored")
        setloading(true)
        try {
            const productref=collection(fireDB,'products')
            await addDoc(productref,products)
            toast.success("Products added successfull")
            setTimeout(()=>{
                window.location.href='/dashboard'
            },800)
            getproductdata()
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }
    
    const [product, setproduct] = useState([]);
    // const [loading, setloading] = useState(true);

    const getproductdata = () => {
        setloading(true);
        try {
            const q = query(
                collection(fireDB, "products"), // Ensure "products" is a string
                orderBy("time")
            );

            // Return the unsubscribe function directly from getproductdata
            return onSnapshot(q, (QuerySnapshot) => {
                let productarray = [];
                QuerySnapshot.forEach((doc) => {
                    productarray.push({ ...doc.data(), id: doc.id });
                });
                setproduct(productarray);
                setloading(false);
            });
        } catch (error) {
            console.error("Error fetching product data: ", error);
            setloading(false);
        }
    };

    useEffect(() => {
        const unsubscribe = getproductdata();
        return () => {
            if (unsubscribe) unsubscribe(); // Ensure unsubscribe is called correctly
        };
    }, []);

    const edithandle=(item)=>{
        setproducts(item)
    }

    const updateproduct=async()=>{
        setloading(true)
        try {
            await setDoc(doc(fireDB,"products",products.id),products)
            toast.success("products updated successfully")
            getproductdata()
            setTimeout(()=>{
                window.location.href="/dashboard"
            },800)
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    const deleteproduct=async(item)=>{
        setloading(true)
        try {
            await deleteDoc(doc(fireDB,"products",item.id));
            toast.success("product deleted successfully")
            getproductdata()
            setloading(false)
        } catch (error) {
            console.log(error)
            setloading(false)
        }
    }

    const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setloading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setloading(false)
      });
      setOrder(ordersArray);
      console.log(ordersArray)
      setloading(false);
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setloading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setloading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setloading(false);
    } catch (error) {
      console.log(error)
      setloading(false)
    }
  }

  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')


  useEffect(() => {
    getproductdata();
    getOrderData();
    getUserData();
  }, []);



    return (
        <MyContext.Provider value={{searchkey, setSearchkey,filterType, setFilterType,
            filterPrice, setFilterPrice,user,mode,toggleMode,loading,setloading,products,setproducts,addproduct,product,edithandle,updateproduct,deleteproduct,order}}>
            {props.children}
        </MyContext.Provider>
    );
}

MyState.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MyState;