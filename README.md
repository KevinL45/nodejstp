
# nodejstp

# Developpeurs
Kevin => K  
Serge => S  
Aurélien => A  

## To Do 
Serveur [X]   
Router les pages html avec Resources HTTP [] => K  
Architecture MVC [] => A  
intégrer Bootstrap [] => K  
page d'accueil []  => K  
page afficher contact [] => K   
Page gestion contact (creer / modifier) []  => K  
systeme d'inscription (+ tard) []  => A
associer contact à utilisateur (+ tard) [] => S  
Si user connecte -> afficher ses contacts sur page   accueil []  

## Features 
generation Vcard [X] => A
generation QRCode  []  => A  
export liste Contact Excel []  => K (soutien A)  
export contact format PDF [] => S  

## BDD 
MongoDb [K] => S
- user project123
- pass 3qvBumFuC212Zmjh

Download local version of MongoDB: https://www.mongodb.com/try/download/community

## Entités
Contact [X]  => A   
{ 
    firstName : string  
    surName: string  
    mail : string  
    adress : string 
} 

User (plus tard) []  
{
    contact: Contact[]  
    .....  
}
