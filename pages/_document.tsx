import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        {/* <Script
          id="global-inline-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                console.log('This is a global inline script');
                console.log('clicked')
                const button = document.getElementById("animatedButton");
                console.log('clicked again')
                button.addEventListener("click", () => {
                  button.classList.add("animate-bounce");
                  setTimeout(() => {
                    button.classList.remove("animate-bounce");
                  }, 500);
                });
              `,
          }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
