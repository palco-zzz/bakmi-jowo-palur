import { ref, computed } from 'vue';

const cart = ref([]);
const isCartOpen = ref(false);

export function useCart() {
    const addToCart = (item) => {
        const existingItem = cart.value.find(i => i.name === item.name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.value.push({ ...item, quantity: 1 });
        }
        isCartOpen.value = true;
    };

    const removeFromCart = (index) => {
        cart.value.splice(index, 1);
    };

    const updateQuantity = (index, change) => {
        const item = cart.value[index];
        const newQuantity = item.quantity + change;

        if (newQuantity > 0) {
            item.quantity = newQuantity;
        } else {
            removeFromCart(index);
        }
    };

    const cartTotal = computed(() => {
        return cart.value.reduce((total, item) => {
            // Parse price string "Rp 16.000" -> 16000
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            return total + (price * item.quantity);
        }, 0);
    });

    const cartItemCount = computed(() => {
        return cart.value.reduce((count, item) => count + item.quantity, 0);
    });

    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    };

    return {
        cart,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartItemCount,
        formatPrice
    };
}
