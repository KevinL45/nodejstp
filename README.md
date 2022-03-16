
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
generation QRCode (Vcard) []  => A
export liste Contact Excel []  => K (soutien A)
export contact format PDF [] => S

## BDD 
MongoDb [] => S

## Entités
Contact []  => A
    firstName : string
    surName: string
    mail : string
    adress : string

User (plus tard) []
    contact: Contact[]
    .....
