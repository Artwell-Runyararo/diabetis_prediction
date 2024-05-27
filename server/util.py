import pickle
import numpy as np

__model = None


# Predicting function here
def get_estimated_diabeties(pregnancies,glucose,diastolic,trieps,insulin,bmi,dpf,age):

    Xl = np.zeros(8)
    Xl[0] = pregnancies
    Xl[1] = glucose
    Xl[2] = diastolic
    Xl[3] = trieps
    Xl[4] = insulin
    Xl[5] = bmi
    Xl[6] = dpf
    Xl[7] = age
    print("This is X values from User Input:",Xl)

    # return round(__model.predict([Xl])[0],2)
   # Ensure the input array is of native Python floats
    Xl = Xl.tolist()
    prediction = __model.predict([Xl])[0]
    print("Raw prediction:", prediction)
    
    # Convert the prediction to a Python float
    return round(float(prediction), 2)


# Loading our model we exported  from jupyter and now imporitng it for usage
def load_saved_artifacts():
    print("loading saved artifacts...start")
    global __model

    with open("C:/Users/amurimi/Desktop/panpan/model/diabeties_prediction.pickle",'rb') as f:
        __model = pickle.load(f)
    print('loading saved artifacts...done')


if __name__ == '__main__':
    load_saved_artifacts()
    print("******* Lets Preditic the Diabeties ********")
    # print(get_estimated_diabeties(6,102,90,39,0,35.7,0.674,28))