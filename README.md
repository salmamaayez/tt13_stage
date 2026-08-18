# 📊 TT 13 Dashboard — Supervision des réseaux d'accès

> **Projet PFE-25-26-TT-13 — Tunisie Télécom**

Dashboard web de supervision et d'analyse de la **Qualité de Service (QoS) des réseaux d'accès** de Tunisie Télécom.

Le projet combine :

* 🐍 un générateur de données synthétiques développé en Python ;
* 🔄 un module de traitement et d'agrégation des données ;
* 🤖 un modèle d'intelligence artificielle pour l'analyse, la prédiction et/ou la détection d'anomalies ;
* 📊 un dashboard React permettant de visualiser les KPI réseau et les résultats du modèle IA.

Les données utilisées sont synthétiques et reproduisent une structure réaliste de données réseau afin de permettre le développement et la validation de la solution sans utiliser de données confidentielles.

---

## 🎯 Objectifs

Le dashboard permet de :

* suivre les principaux KPI QoS ;
* visualiser l'état et les performances des réseaux d'accès ;
* analyser les performances par région ;
* comparer les différentes technologies d'accès ;
* suivre l'évolution du trafic ;
* visualiser la disponibilité du réseau ;
* consulter les alertes et anomalies ;
* afficher les résultats du modèle IA ;
* visualiser les prévisions ;
* faciliter l'analyse et la prise de décision.

---

# 🏗️ Architecture du projet

L'architecture actuelle du projet est composée de plusieurs modules déjà développés et intégrés.

```text
                    ┌─────────────────────────┐
                    │   Générateur Python     │
                    │                         │
                    │ Données réseau          │
                    │ synthétiques            │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │ Prétraitement &         │
                    │ Agrégation Python       │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │      Modèle IA          │
                    │                         │
                    │ Prédictions / Anomalies │
                    └────────────┬────────────┘
                                 │
                                 │ Résultats IA
                                 ▼
                    ┌─────────────────────────┐
                    │     Données Dashboard   │
                    │                         │
                    │ KPI + résultats IA      │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    React Dashboard      │
                    │                         │
                    │ KPI                     │
                    │ Graphiques               │
                    │ Régions                  │
                    │ Technologies             │
                    │ Alertes                  │
                    │ Prévisions IA            │
                    └─────────────────────────┘
```

### 🔗 Flux de données

Le fonctionnement global est donc :

```text
Génération des données
        ↓
Prétraitement
        ↓
Agrégation
        ↓
Modèle IA
        ↓
Résultats IA
        ↓
Intégration dans le Dashboard
        ↓
Visualisation
```

Le modèle IA **n'est pas un module indépendant du dashboard** : ses résultats sont déjà intégrés dans l'interface afin d'être visualisés directement par l'utilisateur.

---

# 🐍 Génération des données

Le projet dispose d'un générateur de données développé en **Python**.

Il permet de produire des données synthétiques représentant différents paramètres des réseaux d'accès.

Ces données sont utilisées pour :

* alimenter le dashboard ;
* entraîner/tester le modèle IA ;
* simuler différents états du réseau ;
* tester les KPI ;
* reproduire différents scénarios réseau.

Les données générées sont ensuite préparées et agrégées avant leur utilisation dans le dashboard.

---

# 🤖 Modèle d'intelligence artificielle

Un modèle d'intelligence artificielle a été développé dans le cadre du projet.

Le modèle exploite les données réseau générées afin de produire des résultats permettant notamment :

* la prévision de certains indicateurs ;
* l'identification de tendances ;
* la détection de comportements anormaux ;
* l'analyse prédictive des performances réseau.

Les résultats du modèle IA ont été **intégrés directement dans le dashboard React**.

Ils sont notamment utilisés dans la vue :

```text
🤖 Prévisions IA
```

Ainsi, l'utilisateur n'a pas besoin d'accéder séparément au modèle Python : les résultats sont directement présentés dans l'interface de supervision.

---

# 📊 Dashboard

Le dashboard constitue la couche de visualisation du projet.

Il permet de centraliser les données réseau et les résultats du modèle IA dans une interface unique.

## KPI

Les KPI permettent d'obtenir rapidement une vision globale de l'état du réseau.

Exemples :

* disponibilité ;
* trafic ;
* performance ;
* incidents ;
* indicateurs QoS.

## 📈 Trafic

Visualisation de l'évolution du trafic réseau au cours du temps.

## 🌐 Disponibilité

Affichage du taux de disponibilité des réseaux d'accès.

## 📍 Régions

Comparaison des performances entre les différentes régions.

## 🔌 Technologies

Visualisation de la répartition et des performances selon les technologies d'accès.

## ⚠️ Alertes

Affichage des événements et anomalies détectés.

## 🤖 Prévisions IA

Affichage des résultats produits par le modèle d'intelligence artificielle.

Cette partie permet notamment de visualiser les tendances et prévisions directement depuis le dashboard.

---

# 📁 Architecture du frontend

```text
src/
│
├── App.jsx
├── theme.js
│
├── data/
│   ├── mockData.js
│   └── dashboard_data.json
│
├── hooks/
│   └── useCountUp.js
│
└── components/
    │
    ├── layout/
    │   ├── Sidebar.jsx
    │   └── Header.jsx
    │
    ├── ui/
    │   ├── Panel.jsx
    │   ├── Sparkline.jsx
    │   ├── ChartTooltip.jsx
    │   └── Legend.jsx
    │
    ├── kpi/
    │   ├── KpiCard.jsx
    │   └── KpiGrid.jsx
    │
    ├── charts/
    │   ├── TrafficChart.jsx
    │   ├── AvailabilityGauge.jsx
    │   ├── RegionChart.jsx
    │   ├── TechnologyDonut.jsx
    │   └── ForecastChart.jsx
    │
    └── alerts/
        └── AlertsPanel.jsx
```

---

# 🛠️ Technologies utilisées

| Technologie               | Rôle                                         |
| ------------------------- | -------------------------------------------- |
| **Python**                | Génération et traitement des données         |
| **Machine Learning / IA** | Prévisions et analyse des données            |
| **React 18**              | Développement du dashboard                   |
| **Vite**                  | Environnement de développement               |
| **Tailwind CSS**          | Interface et mise en page                    |
| **Recharts**              | Graphiques et visualisations                 |
| **Framer Motion**         | Animations                                   |
| **Lucide React**          | Icônes                                       |
| **JSON**                  | Échange et stockage des données du dashboard |

---

# 🚀 Installation

## Prérequis

Installer :

* Node.js
* npm
* Python pour le module de génération/traitement des données

Vérifier Node.js et npm :

```bash
node -v
npm -v
```

Vérifier Python :

```bash
python --version
```

---

## Installation du dashboard

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Le dashboard est accessible par défaut à :

```text
http://localhost:5173
```

---

# 📦 Build de production

```bash
npm run build
```

Les fichiers générés sont disponibles dans :

```text
dist/
```

Pour tester le build :

```bash
npm run preview
```

---

# 🔄 Pipeline complet

Le pipeline actuellement développé est :

```text
┌─────────────────────┐
│ Générateur Python   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Données synthétiques│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Prétraitement       │
│ & Agrégation        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Modèle IA           │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Résultats IA        │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Dashboard React     │
│                     │
│ KPI                 │
│ Graphiques          │
│ Alertes             │
│ Prévisions IA       │
└─────────────────────┘
```

---

# 📌 État actuel du projet

| Fonctionnalité                       | État            |
| ------------------------------------ | --------------- |
| Générateur de données Python         | ✅ Réalisé       |
| Données synthétiques                 | ✅ Réalisé       |
| Prétraitement                        | ✅ Réalisé       |
| Agrégation                           | ✅ Réalisé       |
| Modèle IA                            | ✅ Réalisé       |
| Intégration IA → Dashboard           | ✅ Réalisé       |
| KPI                                  | ✅ Réalisé       |
| Graphiques                           | ✅ Réalisé       |
| Alertes                              | ✅ Réalisé       |
| Prévisions IA dans le dashboard      | ✅ Intégré       |
| Interface React                      | ✅ Réalisé       |
| Filtres avancés                      | 🔄 À finaliser  |
| Connexion à une source réseau réelle | 🔄 Étape future |

---

# 🔜 Prochaines étapes

###  Préparation à la supervision réelle

À terme, les données synthétiques pourront être remplacées ou complétées par des données issues des infrastructures réelles de supervision.

Les technologies envisagées peuvent notamment inclure :

```text
SNMP
Syslog
API
Systèmes de supervision réseau
```

L'objectif final est de pouvoir faire évoluer le pipeline actuel :

```text
Données synthétiques
       ↓
Générateur Python
       ↓
Modèle IA
       ↓
Dashboard
```

vers :

```text
Équipements réseau réels
       ↓
SNMP / Syslog / API
       ↓
Collecte des données
       ↓
Traitement Python
       ↓
Modèle IA
       ↓
Dashboard de supervision
```

---

# 🔐 Données et confidentialité

Les données utilisées actuellement sont synthétiques.

Elles permettent de reproduire des scénarios réalistes de réseaux d'accès sans exposer les données confidentielles de Tunisie Télécom.

Aucune donnée réelle ou confidentielle ne doit être publiée dans le repository.

---

# 👥 Projet

**Projet :** PFE-25-26-TT-13
**Sujet :** Supervision des réseaux d'accès
**Entreprise :** Tunisie Télécom
**Type :** Projet d'été

---

# 📌 Résumé

Le projet TT-13 propose une solution complète combinant :

```text
🐍 Génération de données
          +
🔄 Traitement et agrégation
          +
🤖 Intelligence artificielle
          +
📊 Dashboard interactif
          ↓
🌐 Supervision des réseaux d'accès
```

Le générateur Python produit les données synthétiques, le module IA analyse ces données et produit les résultats prédictifs, et le dashboard React intègre directement ces résultats afin de fournir une vision centralisée des performances, des KPI, des alertes et des prévisions réseau.
