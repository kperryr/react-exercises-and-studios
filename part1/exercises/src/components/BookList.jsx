export default function BookList() {
   let pageTitle = "Dr. Seuss Books";
   let book1 = "https://images.booksense.com/images/011/800/9780394800011.jpg";
   let book2 = "https://images.booksense.com/images/165/800/9780394800165.jpg";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRtc54MHmEafFXN_0YpwnKfpv-XI2rM7r6g&s";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Cat in the Hat" />
         <img src={book2} alt="Green Eggs and Ham" />
         <img src={book3} alt="Fox in Socks" />
      </div>      
   );
}