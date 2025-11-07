export const formSchema = {
  form: {
    id: "quoteForm",
    title: "Demander un devis",
    description:
      "Formulaire de demande de devis pour les services de nettoyage en Île-de-France.",
    submitLabel: "Obtenir mon devis gratuit",
    fields: [
      {
        id: "service",
        type: "select",
        label: "Type de prestation",
        placeholder: "Choisissez un type de prestation",
        required: true,
        options: [
          { value: "restaurant", label: "Nettoyage restaurant" },
          { value: "local_pro", label: "Nettoyage local professionnel" },
          { value: "hotte", label: "Nettoyage hotte professionnelle" },
          { value: "vitres", label: "Nettoyage vitres" },
        ],
      },
      {
        id: "commonFields",
        group: [
          {
            id: "fullname",
            type: "text",
            label: "Nom complet",
            placeholder: "Ex : Jean Dupont",
            required: true,
          },
          {
            id: "email",
            type: "email",
            label: "Adresse email",
            placeholder: "Ex : contact@exemple.com",
            required: true,
          },
          {
            id: "phone",
            type: "tel",
            label: "Téléphone",
            placeholder: "Ex : 0601020304",
          },
          {
            id: "localisation",
            type: "text",
            label: "Ville ou code postal",
            placeholder: "Ex : Paris 12e",
          },
        ],
      },
    ],
    conditionalSections: {
      restaurant: {
        label: "Détails pour le nettoyage de restaurant",
        fields: [
          {
            id: "type_nettoyage",
            type: "select",
            label: "Type de nettoyage",
            options: [
              {
                value: "complet",
                label: "Complet (salle + cuisine, sans la hotte)",
              },
              { value: "salle", label: "Salle uniquement" },
              { value: "cuisine", label: "Cuisine uniquement" },
              { value: "vitres", label: "Vitres" },
            ],
          },
          {
            id: "superficie",
            type: "select",
            label: "Superficie à nettoyer (en m²)",
            options: [
              { value: "9-15", label: "9m² - 15m²" },
              { value: "15-30", label: "15m² - 30m²" },
              { value: "30-50", label: "30m² - 50m²" },
              { value: "50-80", label: "50m² - 80m²" },
              { value: "80+", label: "Plus 80m²" },
            ],
          },
          {
            id: "type_intervention",
            type: "select",
            label: "Type d’intervention",
            options: [
              { value: "ponctuelle", label: "Ponctuelle" },
              { value: "recurrente", label: "Récurrente" },
            ],
          },
          {
            id: "desired_date",
            type: "select",
            label: "Date d’intervention souhaitée",
            options: [
              { value: "indefinie", label: "Je ne sais pas encore" },
              { value: "rapidement", label: "Rapidement" },
              { value: "date", label: "Choisir une date précise" },
            ],
          },
        ],
      },
      local_pro: {
        label: "Détails pour le nettoyage de local professionnel",
        fields: [
          {
            id: "type_local",
            type: "select",
            label: "Type de local",
            options: [
              { value: "bureau", label: "Bureau" },
              { value: "salon", label: "Salon de coiffure / Barber" },
              { value: "commerce", label: "Commerce" },
              { value: "autre", label: "Autre" },
            ],
          },
          {
            id: "superficie",
            type: "select",
            label: "Superficie à nettoyer",
            options: [
              { value: "9-15", label: "9m² - 15m²" },
              { value: "15-30", label: "15m² - 30m²" },
              { value: "30-50", label: "30m² - 50m²" },
              { value: "50-80", label: "50m² - 80m²" },
              { value: "80+", label: "Plus 80m²" },
            ],
          },
          {
            id: "type_intervention",
            type: "select",
            label: "Type d’intervention",
            options: [
              { value: "ponctuelle", label: "Ponctuelle" },
              { value: "recurrente", label: "Récurrente" },
            ],
          },
        ],
      },
      hotte: {
        label: "Détails pour le nettoyage de hotte professionnelle",
        fields: [
          { id: "nombre_hottes", type: "number", label: "Nombre de hottes" },
          {
            id: "type_etablissement",
            type: "select",
            label: "Type d’établissement",
            options: [
              { value: "restaurant", label: "Restaurant" },
              { value: "snack", label: "Snack / Fast-food" },
              { value: "cantine", label: "Cantine / collectif" },
            ],
          },
          {
            id: "longueur",
            type: "select",
            label: "Longueur de hotte (en mètres)",
            options: [
              { value: "1-3", label: "1m - 3m" },
              { value: "3-6", label: "3m - 6m" },
              { value: "8+", label: "Plus de 8m" },
            ],
          },
          {
            id: "encrassement",
            type: "select",
            label: "Niveau d’encrassement",
            options: [
              { value: "faible", label: "Faible" },
              { value: "moyen", label: "Moyen" },
              { value: "tres", label: "Très encrassé" },
              { value: "unknown", label: "Je ne sais pas" },
            ],
          },
          {
            id: "derniere_visite",
            type: "date",
            label: "Dernière visite de nettoyage",
          },
        ],
      },
      vitres: {
        label: "Détails pour le nettoyage de vitres",
        fields: [
          {
            id: "type_lieu",
            type: "select",
            label: "Type de lieu",
            options: [
              { value: "appartement", label: "Appartement / maison" },
              { value: "bureaux", label: "Local professionnel / bureaux" },
              { value: "commerce", label: "Commerce / restaurant" },
              { value: "immeuble", label: "Immeuble / façade" },
            ],
          },
          {
            id: "type_vitres",
            type: "select",
            label: "Type de vitres",
            options: [
              { value: "vitrine", label: "Vitrines commerciales" },
              { value: "fenetres", label: "Fenêtres classiques" },
              { value: "baies", label: "Baies vitrées" },
              { value: "verriere", label: "Verrière / verranda" },
              { value: "autre", label: "Autre" },
            ],
          },
          {
            id: "surface",
            type: "select",
            label: "Surface estimée",
            options: [
              { value: "<10", label: "Moins de 10 m²" },
              { value: "10-30", label: "10 à 30 m²" },
              { value: "30-60", label: "30 à 60 m²" },
              { value: "60+", label: "Plus de 60 m²" },
            ],
          },
          {
            id: "accessibilite",
            type: "select",
            label: "Accessibilité",
            options: [
              { value: "rdc", label: "Rez-de-chaussée" },
              { value: "1etage", label: "1er étage (accès facile)" },
              { value: "hauteur", label: "Hauteur / nacelle nécessaire" },
              { value: "unknown", label: "Je ne sais pas" },
            ],
          },
          {
            id: "frequence",
            type: "select",
            label: "Fréquence souhaitée",
            options: [
              { value: "ponctuelle", label: "Ponctuelle" },
              { value: "hebdo", label: "Hebdomadaire" },
              { value: "mensuelle", label: "Mensuelle" },
              { value: "trimestrielle", label: "Trimestrielle" },
            ],
          },
        ],
      },
    },
    finalFields: [
      {
        id: "message",
        type: "textarea",
        label: "Message utile / précisions",
        placeholder: "Décrivez vos besoins ou contraintes particulières",
      },
      {
        id: "accept_rgpd",
        type: "checkbox",
        label:
          "J’accepte le traitement de mes données conformément à la politique de confidentialité.",
        required: true,
      },
    ],
    submission: {
      method: "POST",
      endpoint: "/api/quotes",
      payloadFormat: {
        fullname: "{{fullname}}",
        email: "{{email}}",
        phone: "{{phone}}",
        service: "{{service}}",
        details: "{{conditionalSectionFields}}",
        message: "{{message}}",
        desired_date: "{{desired_date}}",
        specific_date: "{{specific_date}}",
        localisation: "{{localisation}}",
      },
    },
  },
};
