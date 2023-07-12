import { CardElement } from "@stripe/react-stripe-js"
export default function Payment() {

    const cardStyle = {
        style: {
            base: {
                color: '#71757a',

            }
        }
    }

    return (
        <main>
            <div>
                <h2 className="text-center text-2xl text-gray-600 mt-5">Metodos de pago</h2>

                <div className="bg-gray-100 m-10 flex flex-col gap-2 p-10 rounded">
                    <h1 className="text-sm font-semibold text-gray-500">Introduzca sus datos bancarios</h1>
                    <div className="bg-slate-200 p-4 rounded">
                    <CardElement options={cardStyle} />
                    </div>
                   
                    <div className="flex justify-center">
                        <button
                            className="text-white bg-blue-600 w-32 py-2 rounded ">
                            Pagar</button>
                    </div>


                </div>
            </div>
        </main>

    )
}
