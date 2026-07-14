export default async function TeamSlot() {
  // 4. YEH KYU HAI: Ek aur independent panel (1 sec delay).
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return (
    <div>
      <ul className="space-y-3">
        {['Alice', 'Bob', 'Charlie'].map(name => (
          <li key={name} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-200 dark:bg-green-800" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
