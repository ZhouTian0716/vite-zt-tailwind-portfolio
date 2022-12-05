const SocialMediaIcons = () => {
  const iconObj = [
    { href: "https://www.linkedin.com", src: "assets/linkedin.png" },
    { href: "https://www.twitter.com", src: "assets/twitter.png" },
    { href: "https://www.facebook.com", src: "assets/facebook.png" },
    { href: "https://www.instagram.com", src: "assets/instagram.png" },
  ];
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      {iconObj.map((e, i) => (
        <a
          key={i}
          className="hover:opacity-50 transition duration-500"
          href={e.href}
          target="_blank"
          rel="noreferrer"
        >
          <img alt={e.href} src={e.src} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
