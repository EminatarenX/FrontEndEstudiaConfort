import useEstudiantes from "../hooks/useEstudiantes"
import {Elements} from '@stripe/react-stripe-js'
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Payment from "../components/Payment"
const stripePromise = loadStripe('pk_test_51NOtkQJRIprVyB9K0UY77sBc2OgPF6LdnLTdCDWMin0EIHMmTGEJ49K4AibKRZDPicM3Vucn36umeyeb7s1JO1vN00AZh2SCto')

export default function AdminPagar() {
  const [options, setOptions] = useState({})


  return (
    <Elements stripe={stripePromise}>
      <Payment/>
    </Elements>
  )
}
