export default function PricePerTime({ price, time }) {
  return (
    <div class="flex items-baseline justify-center my-8">
      <span class="mr-2 text-5xl font-extrabold">{price}</span>
      <span class="text-gray-500 dark:text-gray-400">/{time}</span>
    </div>
  );
}
