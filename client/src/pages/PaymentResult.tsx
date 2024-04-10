import axios from "axios"
import { useEffect, useState } from "react"

export const PaymentResult = () => {
    const [verified, setVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        if (verified) return

        const verifyPayment = async () => {
            let sessionId = localStorage.getItem("stripeSessionId")
            if (!sessionId) return
            sessionId = JSON.parse(sessionId)
            
            try {
                const response = await axios.post("http://localhost:3000/api/stripe/verify-payment", { sessionId })
                
                if (response.status === 200) {
                    setVerified(response.data.isPayed)
                }
            } catch (error) {
                console.error("Error verifying payment:", error)
            } finally {
                setIsLoading(false)
            }
        }

        verifyPayment()
    }, [verified])

    return <>{verified && !isLoading ? "Thank you for shopping!" : "Wait"}</>
}
