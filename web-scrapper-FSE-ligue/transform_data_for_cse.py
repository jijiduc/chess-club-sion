#!/usr/bin/env python3
import json
import os

# Mapping des joueurs de Sion pour récupérer leurs ELO corrects
SION_PLAYERS_ELO = {
    "Christophe Sochacki": 2458,
    "Flavien Sola": 2167,
    "Vlad Popescu": 1990,
    "Jean-Michel Paladini": 1983,
    "Pierre-M. Rappaz": 1933,
    "Pierre-Marie Rappaz": 1933,
    "Yves Roduit": 1910,
    "Max Chappaz": 1904,
    "Yann Bourban": 1885,
    "Jean-Yves Riand": 1877,
    "Jeremy Duc": 1829,
    "Olivier Crettenand": 1826,
    "Olivier Ulmann": 1788,
    "Claude Bétrisey": 1697,
    "Alexandre Briguet": 1828,
    "Sandro Bétrisey": 1745,
    "Mazlum Tosun": 1689,
    "Simon Moerschell": 1663,
    "Akram Ben Salem": 0,
    "Florian Clavien": 0,
    "Joan Cortada Garcia": 1824
}

def get_sion_player_elo(player_name):
    """Récupère l'ELO d'un joueur de Sion depuis notre mapping"""
    # Nettoyer le nom
    clean_name = player_name.strip()
    
    # Chercher dans le mapping
    for name, elo in SION_PLAYERS_ELO.items():
        if name in clean_name or clean_name in name:
            return elo
    
    # Si pas trouvé, retourner 0
    print(f"⚠️  Joueur non trouvé dans le mapping: {player_name}")
    return 0

def transform_data():
    # Lire les données JSON
    with open('cse_data_2025/all_rounds_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Créer la structure pour la page CSE
    cse_data = {
        "sion1": {
            "results": [],
            "players": []
        },
        "sion2": {
            "results": [],
            "players": []
        }
    }
    
    # Ajouter la liste des joueurs avec ELO
    for name, elo in sorted(SION_PLAYERS_ELO.items(), key=lambda x: x[1], reverse=True):
        if elo >= 1800 or name in ["Olivier Ulmann", "Claude Bétrisey"]:
            cse_data["sion1"]["players"].append(f"{name} ({elo})")
        if elo < 1850 or name in ["Alexandre Briguet", "Olivier Crettenand"]:
            cse_data["sion2"]["players"].append(f"{name} ({elo})")
    
    # Traiter les rondes pour Sion 1
    for round_num in range(1, 5):
        round_key = f"round{round_num}"
        if round_key in data["Sion 1"]:
            round_data = data["Sion 1"][round_key]
            
            # Trouver le match de Sion 1
            for match in round_data["matches"]:
                if "Sion 1" in match["homeTeam"] or "Sion 1" in match["awayTeam"]:
                    # Déterminer si Sion joue à domicile ou à l'extérieur
                    if "Sion 1" in match["homeTeam"]:
                        opponent = match["awayTeam"]
                        venue = "home"
                        sion_boards = "home"
                    else:
                        opponent = match["homeTeam"]
                        venue = "away"
                        sion_boards = "away"
                    
                    # Déterminer le lieu
                    location = "Sion" if venue == "home" else opponent.split()[0]
                    
                    # Déterminer la date selon la ronde
                    dates = {1: "22.03.2025", 2: "05.04.2025", 3: "26.04.2025", 4: "17.05.2025"}
                    
                    # Créer le résultat
                    result = {
                        "round": round_num,
                        "date": dates.get(round_num, ""),
                        "opponent": opponent,
                        "venue": venue,
                        "location": location,
                        "result": match["score"],
                        "boards": []
                    }
                    
                    # Ajouter les boards
                    for board in match["boards"]:
                        if sion_boards == "home":
                            player = board["homePlayer"]
                            opponent_player = board["awayPlayer"]
                            player_elo = get_sion_player_elo(player) or board["homeRating"]
                        else:
                            player = board["awayPlayer"]
                            opponent_player = board["homePlayer"]
                            player_elo = get_sion_player_elo(player) or board["awayRating"]
                            # Inverser le résultat si Sion joue avec les noirs
                            parts = board["result"].split("-")
                            board["result"] = f"{parts[1]}-{parts[0]}"
                        
                        result["boards"].append({
                            "player": player,
                            "opponent": opponent_player,
                            "result": board["result"],
                            "playerElo": player_elo
                        })
                    
                    cse_data["sion1"]["results"].append(result)
                    break
    
    # Traiter les rondes pour Sion 2 (même logique)
    for round_num in range(1, 5):
        round_key = f"round{round_num}"
        if round_key in data["Sion 2"]:
            round_data = data["Sion 2"][round_key]
            
            # Trouver le match de Sion 2
            for match in round_data["matches"]:
                if "Sion 2" in match["homeTeam"] or "Sion 2" in match["awayTeam"]:
                    # Déterminer si Sion joue à domicile ou à l'extérieur
                    if "Sion 2" in match["homeTeam"]:
                        opponent = match["awayTeam"]
                        venue = "home"
                        sion_boards = "home"
                    else:
                        opponent = match["homeTeam"]
                        venue = "away"
                        sion_boards = "away"
                    
                    # Déterminer le lieu
                    location = "Sion" if venue == "home" else opponent.split()[0]
                    
                    # Déterminer la date selon la ronde
                    dates = {1: "22.03.2025", 2: "05.04.2025", 3: "26.04.2025", 4: "17.05.2025"}
                    
                    # Créer le résultat
                    result = {
                        "round": round_num,
                        "date": dates.get(round_num, ""),
                        "opponent": opponent,
                        "venue": venue,
                        "location": location,
                        "result": match["score"],
                        "boards": []
                    }
                    
                    # Ajouter les boards
                    for board in match["boards"]:
                        if sion_boards == "home":
                            player = board["homePlayer"]
                            opponent_player = board["awayPlayer"]
                            player_elo = get_sion_player_elo(player) or board["homeRating"]
                        else:
                            player = board["awayPlayer"]
                            opponent_player = board["homePlayer"]
                            player_elo = get_sion_player_elo(player) or board["awayRating"]
                            # Inverser le résultat si Sion joue avec les noirs
                            parts = board["result"].split("-")
                            board["result"] = f"{parts[1]}-{parts[0]}"
                        
                        result["boards"].append({
                            "player": player,
                            "opponent": opponent_player,
                            "result": board["result"],
                            "playerElo": player_elo
                        })
                    
                    cse_data["sion2"]["results"].append(result)
                    break
    
    # Sauvegarder les données transformées
    with open('cse_data_2025/cse_data_transformed.json', 'w', encoding='utf-8') as f:
        json.dump(cse_data, f, ensure_ascii=False, indent=2)
    
    print("✅ Données transformées et sauvegardées dans cse_data_2025/cse_data_transformed.json")
    
    # Afficher un résumé
    print("\n📊 Résumé des données transformées:")
    print(f"Sion 1: {len(cse_data['sion1']['results'])} rondes")
    print(f"Sion 2: {len(cse_data['sion2']['results'])} rondes")
    
    # Générer le code TypeScript pour la page CSE
    generate_typescript_code(cse_data)

def generate_typescript_code(data):
    """Génère le code TypeScript à insérer dans la page CSE"""
    
    print("\n📝 Code TypeScript généré pour la page CSE:")
    print("=" * 60)
    
    # Sion 1
    print("// Résultats Sion 1")
    print("results: [")
    for result in data["sion1"]["results"]:
        print("  {")
        print(f"    round: {result['round']},")
        print(f"    date: '{result['date']}',")
        print(f"    opponent: '{result['opponent']}',")
        print(f"    venue: '{result['venue']}',")
        print(f"    location: '{result['location']}',")
        print(f"    result: '{result['result']}',")
        print("    boards: [")
        for board in result['boards']:
            print(f"      {{ player: '{board['player']}', opponent: '{board['opponent']}', result: '{board['result']}' }},")
        print("    ]")
        print("  },")
    print("]")
    
    print("\n" + "=" * 60)

if __name__ == "__main__":
    transform_data()