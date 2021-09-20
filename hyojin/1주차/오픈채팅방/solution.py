def solution(record):
    answer = []
    data = []
    for r in record:
        data.append(list(r.split(' ')))
    # print(data)
    dic = {}
    for d in data:
        if d[0] == "Enter" or d[0] == "Change":
            dic[d[1]] = d[2]
    for d in data:
        if d[0] == "Enter":
            answer.append("{}님이 들어왔습니다.".format(dic[d[1]]))
        elif d[0] == "Leave":
            answer.append("{}님이 나갔습니다.".format(dic[d[1]]))

    return answer
