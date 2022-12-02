// Importation du plugin Dialog de Quasar
import { Dialog } from 'quasar'

// Exporte notre fonction
export function afficherMessageErreur (message, erreurs) {
  // Si un tableau d'erreurs est envoyé, crée une liste <ul> avec les erreurs
  if (Array.isArray(erreurs) && erreurs.length) {
    message += '<ul><li>' + erreurs.join('</li><li>') + '</li></ul>'
  }
  // Crée et affiche la boite de dialogue
  Dialog.create({
    title: 'Erreur', // Titre de la dialog
    message, // Message de la dialog
    html: true // Html utilisable dans le message
  })
}
