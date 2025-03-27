import { useUser } from './useUser';

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <div className="flex items-center gap-3">
      <img
        src={avatar || 'default-user.png'}
        alt={`Avatar of ${fullName}`}
        className="h-8 w-8 rounded-full md:h-10 md:w-10"
      />
      <span className="text-xs text-slate-700 sm:text-sm dark:text-slate-100">
        {fullName?.split(' ').at(-1)}
      </span>
    </div>
  );
}

export default UserAvatar;
